import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Plus } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import faqs from '@/data/faqs.json';
import type { FaqItem } from '@/types/content';

const faqItems: FaqItem[] = faqs;

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const toggle = (id: string) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Hỏi đáp" actionLabel="Xem tất cả" actionTo="/hoi-dap/danh-sach-cau-hoi" />

        <div className="mx-auto mt-8 max-w-3xl divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-primary-50/60"
                  >
                    <span className={`font-bold ${isOpen ? 'text-primary-600' : 'text-navy-900'}`}>
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-primary-500 text-white' : 'bg-neutral-100 text-neutral-600'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? <ChevronDown className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-neutral-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/hoi-dap/tao-cau-hoi"
            className="inline-flex items-center gap-2 rounded-md bg-primary-500 px-6 py-3 font-bold text-white shadow-sm transition-colors duration-200 hover:bg-primary-600 hover:text-white"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Tạo câu hỏi
          </Link>
        </div>
      </div>
    </section>
  );
}
