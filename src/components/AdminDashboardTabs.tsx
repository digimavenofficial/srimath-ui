"use client";

import { useMemo, useState } from "react";
import BlogManager from "./BlogManager";
import ProjectManager from "./ProjectManager";
import type { BlogRecord, Project } from "@/types";

type AdminTabKey = "add-blog" | "view-blogs" | "add-project" | "view-projects";

interface AdminDashboardTabsProps {
  blogs: BlogRecord[];
  projects: Project[];
}

const tabs: { key: AdminTabKey; label: string }[] = [
  { key: "add-blog", label: "Add Blog" },
  { key: "view-blogs", label: "View Blogs" },
  { key: "add-project", label: "Add Project" },
  { key: "view-projects", label: "View Projects" },
];

export default function AdminDashboardTabs({
  blogs,
  projects,
}: AdminDashboardTabsProps) {
  const [activeTab, setActiveTab] = useState<AdminTabKey>("add-blog");

  const content = useMemo(() => {
    switch (activeTab) {
      case "add-blog":
        return <BlogManager initialBlogs={blogs} view="form" />;
      case "view-blogs":
        return <BlogManager initialBlogs={blogs} view="list" />;
      case "add-project":
        return <ProjectManager initialProjects={projects} view="form" />;
      case "view-projects":
        return <ProjectManager initialProjects={projects} view="list" />;
      default:
        return null;
    }
  }, [activeTab, blogs, projects]);

  return (
    <div className="space-y-8">
      <section className="rounded-4xl border border-gray-200 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-6">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#F69F11] text-gray-900"
                    : "border border-gray-300 text-gray-700 hover:border-[#F69F11] hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {content}
    </div>
  );
}
