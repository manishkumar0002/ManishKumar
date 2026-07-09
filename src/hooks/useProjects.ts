import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { logger } from "@/lib/logger";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack?: string[];
  highlights?: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  video_url?: string;
  icon?: string;
  featured?: boolean;
  order_index?: number;
  created_at?: string;
  updated_at?: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from("projects")
          .select("*")
          .order("order_index", { ascending: true })
          .order("created_at", { ascending: false });

        if (fetchError) {
          throw fetchError;
        }

        logger.info("useProjects", "Projects fetched", { count: data?.length });
        setProjects(data || []);
        setError(null);
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Failed to fetch projects";
        logger.error("useProjects", "Fetch error", { message: errorMsg, error: err });
        setError(errorMsg);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
