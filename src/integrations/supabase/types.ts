export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5";
  };
  public: {
    Tables: {
      about_content: {
        Row: {
          created_at: string | null;
          description: string;
          id: string;
          image_url: string | null;
          resume_url: string | null;
          title: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          description: string;
          id?: string;
          image_url?: string | null;
          resume_url?: string | null;
          title: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          description?: string;
          id?: string;
          image_url?: string | null;
          resume_url?: string | null;
          title?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      achievements: {
        Row: {
          created_at: string | null;
          description: string;
          icon: string | null;
          id: string;
          order_index: number | null;
          organization: string | null;
          title: string;
          year: string | null;
        };
        Insert: {
          created_at?: string | null;
          description: string;
          icon?: string | null;
          id?: string;
          order_index?: number | null;
          organization?: string | null;
          title: string;
          year?: string | null;
        };
        Update: {
          created_at?: string | null;
          description?: string;
          icon?: string | null;
          id?: string;
          order_index?: number | null;
          organization?: string | null;
          title?: string;
          year?: string | null;
        };
        Relationships: [];
      };
      blog_posts: {
        Row: {
          author_id: string | null;
          category: string | null;
          content: string;
          created_at: string | null;
          excerpt: string | null;
          id: string;
          image_url: string | null;
          published: boolean | null;
          tags: string[] | null;
          title: string;
          updated_at: string | null;
        };
        Insert: {
          author_id?: string | null;
          category?: string | null;
          content: string;
          created_at?: string | null;
          excerpt?: string | null;
          id?: string;
          image_url?: string | null;
          published?: boolean | null;
          tags?: string[] | null;
          title: string;
          updated_at?: string | null;
        };
        Update: {
          author_id?: string | null;
          category?: string | null;
          content?: string;
          created_at?: string | null;
          excerpt?: string | null;
          id?: string;
          image_url?: string | null;
          published?: boolean | null;
          tags?: string[] | null;
          title?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      education: {
        Row: {
          created_at: string | null;
          degree: string;
          description: string | null;
          end_date: string | null;
          field: string | null;
          gpa: string | null;
          icon: string | null;
          id: string;
          institution: string;
          order_index: number | null;
          start_date: string | null;
        };
        Insert: {
          created_at?: string | null;
          degree: string;
          description?: string | null;
          end_date?: string | null;
          field?: string | null;
          gpa?: string | null;
          icon?: string | null;
          id?: string;
          institution: string;
          order_index?: number | null;
          start_date?: string | null;
        };
        Update: {
          created_at?: string | null;
          degree?: string;
          description?: string | null;
          end_date?: string | null;
          field?: string | null;
          gpa?: string | null;
          icon?: string | null;
          id?: string;
          institution?: string;
          order_index?: number | null;
          start_date?: string | null;
        };
        Relationships: [];
      };
      experience: {
        Row: {
          company: string;
          created_at: string | null;
          description: string | null;
          end_date: string | null;
          id: string;
          location: string | null;
          order_index: number | null;
          position: string;
          responsibilities: string[] | null;
          start_date: string | null;
          technologies: string[] | null;
        };
        Insert: {
          company: string;
          created_at?: string | null;
          description?: string | null;
          end_date?: string | null;
          id?: string;
          location?: string | null;
          order_index?: number | null;
          position: string;
          responsibilities?: string[] | null;
          start_date?: string | null;
          technologies?: string[] | null;
        };
        Update: {
          company?: string;
          created_at?: string | null;
          description?: string | null;
          end_date?: string | null;
          id?: string;
          location?: string | null;
          order_index?: number | null;
          position?: string;
          responsibilities?: string[] | null;
          start_date?: string | null;
          technologies?: string[] | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          email: string | null;
          full_name: string | null;
          id: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string | null;
          email?: string | null;
          full_name?: string | null;
          id: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
        };
        Relationships: [];
      };
      resume_archive: {
        Row: {
          archived_at: string | null;
          created_at: string | null;
          id: string;
          resume_filename: string;
          resume_url: string;
          uploaded_date: string | null;
        };
        Insert: {
          archived_at?: string | null;
          created_at?: string | null;
          id?: string;
          resume_filename: string;
          resume_url: string;
          uploaded_date?: string | null;
        };
        Update: {
          archived_at?: string | null;
          created_at?: string | null;
          id?: string;
          resume_filename?: string;
          resume_url?: string;
          uploaded_date?: string | null;
        };
        Relationships: [];
      };
      resume_config: {
        Row: {
          created_at: string | null;
          id: string;
          profile_image_url: string | null;
          resume_filename: string;
          resume_url: string;
          updated_at: string | null;
          uploaded_date: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          profile_image_url?: string | null;
          resume_filename: string;
          resume_url: string;
          updated_at?: string | null;
          uploaded_date?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          profile_image_url?: string | null;
          resume_filename?: string;
          resume_url?: string;
          updated_at?: string | null;
          uploaded_date?: string | null;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          created_at: string | null;
          description: string;
          featured: boolean | null;
          github_url: string | null;
          highlights: string[] | null;
          icon: string | null;
          id: string;
          image_url: string | null;
          live_url: string | null;
          order_index: number | null;
          tech_stack: string[] | null;
          title: string;
          updated_at: string | null;
          video_url: string | null;
        };
        Insert: {
          created_at?: string | null;
          description: string;
          featured?: boolean | null;
          github_url?: string | null;
          highlights?: string[] | null;
          icon?: string | null;
          id?: string;
          image_url?: string | null;
          live_url?: string | null;
          order_index?: number | null;
          tech_stack?: string[] | null;
          title: string;
          updated_at?: string | null;
          video_url?: string | null;
        };
        Update: {
          created_at?: string | null;
          description?: string;
          featured?: boolean | null;
          github_url?: string | null;
          highlights?: string[] | null;
          icon?: string | null;
          id?: string;
          image_url?: string | null;
          live_url?: string | null;
          order_index?: number | null;
          tech_stack?: string[] | null;
          title?: string;
          updated_at?: string | null;
          video_url?: string | null;
        };
        Relationships: [];
      };
      skills: {
        Row: {
          category: string;
          color: string | null;
          created_at: string | null;
          icon: string | null;
          id: string;
          name: string;
          order_index: number | null;
          proficiency: number | null;
        };
        Insert: {
          category: string;
          color?: string | null;
          created_at?: string | null;
          icon?: string | null;
          id?: string;
          name: string;
          order_index?: number | null;
          proficiency?: number | null;
        };
        Update: {
          category?: string;
          color?: string | null;
          created_at?: string | null;
          icon?: string | null;
          id?: string;
          name?: string;
          order_index?: number | null;
          proficiency?: number | null;
        };
        Relationships: [];
      };
      user_roles: {
        Row: {
          id: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Insert: {
          id?: string;
          role?: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Update: {
          id?: string;
          role?: Database["public"]["Enums"]["app_role"];
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"];
          _user_id: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      app_role: "admin" | "user";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const;
