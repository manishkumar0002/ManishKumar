import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { logger } from "@/lib/logger";

export interface ResumeConfig {
  id: string;
  resume_url: string;
  resume_filename: string;
  uploaded_date: string;
  created_at: string;
  updated_at: string;
  profile_image_url: string | null;
}

export const useResumeConfig = () => {
  const getConfig = useCallback(async (): Promise<ResumeConfig | null> => {
    try {
      const { data, error } = await supabase
        .from("resume_config")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          // No rows found
          logger.info("useResumeConfig", "No resume config found");
          return null;
        }
        throw error;
      }

      logger.info("useResumeConfig", "Resume config fetched", { id: data?.id });
      return data as ResumeConfig;
    } catch (error) {
      logger.error("useResumeConfig", "Get config failed", error);
      return null;
    }
  }, []);

  return {
    getConfig,
  };
};
