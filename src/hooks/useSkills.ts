import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { logger } from "@/lib/logger";

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency?: number;
  icon?: string;
  color?: string;
  order_index?: number;
  created_at?: string;
  updated_at?: string;
}

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from("skills")
          .select("*")
          .order("order_index", { ascending: true })
          .order("created_at", { ascending: false });

        if (fetchError) {
          throw fetchError;
        }

        logger.info("useSkills", "Skills fetched", { count: data?.length });
        setSkills(data || []);
        setError(null);
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Failed to fetch skills";
        logger.error("useSkills", "Fetch error", { message: errorMsg, error: err });
        setError(errorMsg);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const groupByCategory = (skillsData: Skill[] = skills) => {
    const grouped: Record<string, Skill[]> = {};
    (skillsData || []).forEach((skill) => {
      const category = skill.category || "Other";
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(skill);
    });
    return grouped;
  };

  return { skills, loading, error, groupByCategory };
};
