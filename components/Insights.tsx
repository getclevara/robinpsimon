"use client";

import { useState } from "react";
import { articles, type Article } from "@/data/articles";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "MARKET INTEL": { bg: "bg-emerald-900/20", text: "text-emerald-400", border: "border-emerald-800/30" },
  "PLAYBOOK": { bg: "bg-blue-900/20", text: "text-blue-400", border: "border-blue-800/30" },
  "NY LIVING": { bg: "bg-amber-900/20", text: "text-amber-400", border: "border-amber-800/30" },
  "INSIDER": { bg: "bg-purple-900/20", text: "text-purple-400", border: "border-purple-800/30" },
  "CONTRARIAN TAKE": { bg: "bg-red-900/20", text: "text-red-400", border: "border-red-800/30" },
};

function ArticleCard({ article, onOpen }: { article: Article; onOpen: () => void }) {
  const colors = categoryColors[article.category] || categoryColors["INSIDER"];

  return (
    <button onClick={onOpen} className="text-left group w-full">
      <div className="bg-robin-navy/[0.03] border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-bh-gold/20 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className={`data-tag ${colors.bg} ${colors.text} border ${colors.border}`}>
            {article.category}
          </span>
          <span className="data-tag bg-gray-100 text-gray-400">{article.readTime}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-robin-navy mb-2 group-hover:text-bh-burgundy transition-colors">
          {article.title}
        </h3>
        <p className="font-body text-bh-slate/70 text-sm leading-relaxed flex-1">
          {article.subtitle}
        </p>
        {article.callout && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-bh-burgundy">{article.callout.value}</span>
            <span className="font-body text-xs text-bh-slate/50 uppercase tracking-wider">{article.callout.label}</span>
          </div>
        )}
        <div className="mt-4 flex items-center gap-2 text-bh-burgundy font-body text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Read analysis</span>
          <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </button>
  );
}

function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  const colors = categoryColors[article.category] || categoryColors["INSIDER"];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-robin-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl mx-4 my-8 md:my-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-robin-navy p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bh-gold to-transparent" />
            <button onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
              <span className="text-xl">&times;</span>
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className={`data-tag ${colors.bg} ${colors.text} border ${colors.border}`}>
                {article.category}
              </span>
              <span className="data-tag bg-white/5 text-white/40 border border-white/10">{article.readTime}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              {article.title}
            </h2>
            <p className="font-body text-white/60 leading-relaxed">
              {article.subtitle}
            </p>
            {article.callout && (
              <div className="mt-6 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3">
                <span className="font-mono text-3xl font-bold text-bh-gold">{article.callout.value}</span>
                <span className="font-body text-xs text-white/40 uppercase tracking-wider">{article.callout.label}</span>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="p-8 md:p-12">
            <div className="space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i} className="font-body text-bh-charcoal/85 leading-[1.8] text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Takeaway */}
            <div className="mt-10 bg-bh-cream border-l-4 border-bh-burgundy rounded-r-xl p-6">
              <div className="font-body text-xs font-bold text-bh-burgundy uppercase tracking-wider mb-2">
                The Takeaway
              </div>
              <p className="font-body text-bh-charcoal leading-relaxed">
                {article.takeaway}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:+15165551234"
                className="bg-bh-burgundy text-white px-8 py-3 font-body font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-bh-burgundy/90 transition-all w-full sm:w-auto text-center">
                Talk to Robin About This
              </a>
              <button onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, text: article.shareText, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(article.shareText + " " + window.location.href);
                }
              }}
                className="border border-gray-300 text-bh-slate px-8 py-3 font-body font-medium text-sm rounded-sm hover:bg-gray-50 transition-all w-full sm:w-auto text-center">
                Share This Insight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Insights() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", ...Array.from(new Set(articles.map((a) => a.category)))];
  const filtered = filter === "ALL" ? articles : articles.filter((a) => a.category === filter);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="text-bh-gold text-xs uppercase tracking-[0.3em] font-body font-semibold">
            Intelligence Briefings
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-robin-navy mt-3 mb-4">
            Insights No Other Agent Gives You
          </h2>
          <p className="font-body text-bh-slate max-w-2xl mx-auto">
            Market predictions, tax strategies, contrarian takes, and the playbooks I actually use with my clients. This is what your agent should be telling you.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`data-tag border transition-all cursor-pointer ${
                filter === cat
                  ? "bg-robin-navy text-white border-robin-navy"
                  : "bg-transparent text-bh-slate/60 border-gray-200 hover:border-bh-gold/40"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} onOpen={() => setOpenArticle(article)} />
          ))}
        </div>
      </div>

      {openArticle && <ArticleModal article={openArticle} onClose={() => setOpenArticle(null)} />}
    </div>
  );
}
