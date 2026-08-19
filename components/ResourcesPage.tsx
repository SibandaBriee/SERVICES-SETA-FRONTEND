"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  resources,
  type ResourceCategory,
  type ResourceFileType,
} from "../data/resources";

type CategoryFilter = "All" | ResourceCategory;
type FileTypeFilter = "All" | ResourceFileType;

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [fileType, setFileType] = useState<FileTypeFilter>("All");

  const categories = useMemo<CategoryFilter[]>(
    () => [
      "All",
      ...Array.from(
        new Set(resources.map((resource) => resource.category)),
      ),
    ],
    [],
  );

  const fileTypes = useMemo<FileTypeFilter[]>(
    () => [
      "All",
      ...Array.from(
        new Set(resources.map((resource) => resource.fileType)),
      ),
    ],
    [],
  );

  const visibleResources = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesSearch =
        !searchText ||
        [
          resource.title,
          resource.description,
          resource.category,
          resource.audience,
          resource.fileType,
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchText);

      const matchesCategory =
        category === "All" || resource.category === category;

      const matchesFileType =
        fileType === "All" || resource.fileType === fileType;

      return matchesSearch && matchesCategory && matchesFileType;
    });
  }, [query, category, fileType]);

  function clearFilters() {
    setQuery("");
    setCategory("All");
    setFileType("All");
  }

  return (
    <>
      <section className="inner-hero resources-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>→</span>
            <span>Resources</span>
          </div>

          <p className="eyebrow">Resources library</p>
          <h1>Find forms, guidelines and publications</h1>

          <p>
            Search and download available Services SETA resources, including
            guidelines, templates, policies and reports.
          </p>
        </div>
      </section>

      <section className="content-section resources-section">
        <div className="container">
          <div className="content-tools resources-tools">
            <div>
              <p className="eyebrow">Find a resource</p>
              <h2>Resource library</h2>

              <p>
                {visibleResources.length}{" "}
                {visibleResources.length === 1
                  ? "resource found"
                  : "resources found"}
              </p>
            </div>

            <label className="filter-search">
              <span className="sr-only">Search resources</span>

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search resources…"
              />

              <b aria-hidden="true">⌕</b>
            </label>
          </div>

          <div className="resource-filters">
            <label>
              <span>Category</span>

              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value as CategoryFilter)
                }
              >
                {categories.map((categoryOption) => (
                  <option
                    value={categoryOption}
                    key={categoryOption}
                  >
                    {categoryOption}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>File type</span>

              <select
                value={fileType}
                onChange={(event) =>
                  setFileType(event.target.value as FileTypeFilter)
                }
              >
                {fileTypes.map((fileTypeOption) => (
                  <option
                    value={fileTypeOption}
                    key={fileTypeOption}
                  >
                    {fileTypeOption}
                  </option>
                ))}
              </select>
            </label>

            {(query || category !== "All" || fileType !== "All") && (
              <button
                className="clear-filters"
                type="button"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            )}
          </div>

          {visibleResources.length > 0 ? (
            <div className="resource-grid">
              {visibleResources.map((resource) => (
                <article
                  className="resource-card"
                  key={resource.id}
                >
                  <div className="resource-card-head">
                    <span className="resource-type">
                      {resource.fileType}
                    </span>

                    <span
                      className={
                        resource.available
                          ? "resource-status available"
                          : "resource-status unavailable"
                      }
                    >
                      {resource.available
                        ? "Available"
                        : "Coming soon"}
                    </span>
                  </div>

                  <p className="eyebrow">{resource.category}</p>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <dl className="resource-metadata">
                    <div>
                      <dt>Audience</dt>
                      <dd>{resource.audience}</dd>
                    </div>

                    <div>
                      <dt>Published</dt>
                      <dd>{resource.publishedDate}</dd>
                    </div>

                    <div>
                      <dt>File</dt>
                      <dd>
                        {resource.fileType}
                        {resource.fileSize
                          ? ` · ${resource.fileSize}`
                          : ""}
                      </dd>
                    </div>
                  </dl>

                  <div className="resource-actions">
                    {resource.available &&
                    resource.downloadUrl ? (
                      <a
                        className="resource-download"
                        href={resource.downloadUrl}
                        download
                        aria-label={`Download ${resource.title} as ${resource.fileType}`}
                      >
                        Download {resource.fileType} ↓
                      </a>
                    ) : (
                      <button
                        className="resource-download disabled"
                        type="button"
                        disabled
                      >
                        Coming soon
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>No matching resources</strong>

              <p>
                Try another search term or clear the filters.
              </p>

              <button type="button" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}

          <aside className="page-help">
            <div>
              <p className="eyebrow">Need assistance?</p>
              <h2>Cannot find the document you need?</h2>

              <p>
                Contact the support team for help locating the correct
                form, guideline or publication.
              </p>
            </div>

            <Link className="button" href="/support">
              Get guided help →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}