import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { brand } from '@/config/brand';

const contactItems = [
  { label: 'Địa chỉ', icon: MapPin, content: brand.address, href: undefined },
  ...brand.hotlines.map((hotline) => ({
    label: 'Điện thoại',
    icon: Phone,
    content: hotline,
    href: `tel:${hotline.replace(/\s/g, '')}`,
  })),
  { label: 'Email', icon: Mail, content: brand.email, href: `mailto:${brand.email}` },
];

export function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-sm text-neutral-500">
        <Link to="/" className="hover:text-primary-600">Trang chủ</Link>
        <span aria-hidden="true">/</span>
        <span className="text-navy-900">Liên hệ</span>
      </nav>

      <h1 className="mt-6 border-l-4 border-primary-500 pl-4 text-2xl font-bold text-navy-900 sm:text-3xl">Liên hệ</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
        Gửi câu hỏi hoặc yêu cầu tư vấn đến Trung tâm Mã số, Mã vạch Quốc gia qua một trong các kênh dưới đây.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map(({ label, icon: Icon, content, href }, index) => {
          const body = (
            <>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-neutral-500">{label}</p>
              <p className="font-bold leading-relaxed text-navy-900">{content}</p>
            </>
          );
          const cardClass =
            'flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300';
          return href ? (
            <a
              key={`${label}-${index}`}
              href={href}
              className={`${cardClass} hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg`}
            >
              {body}
            </a>
          ) : (
            <div key={`${label}-${index}`} className={cardClass}>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
