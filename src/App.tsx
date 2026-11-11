import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { mainNav, flattenNavItems, newsCategories } from '@/config/navigation';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PlaceholderPage } from '@/pages/PlaceholderPage';
import { NewsListPage } from '@/pages/NewsListPage';
import { NewsDetailPage } from '@/pages/NewsDetailPage';
import { ContentPage } from '@/pages/ContentPage';
import { ContactPage } from '@/pages/ContactPage';
import infoPages from '@/data/infoPages.json';
import type { InfoPage } from '@/types/content';

const newsCategorySlugs = newsCategories.map((cat) => cat.slug);
const contentPages: InfoPage[] = infoPages;
const contentPagePaths = contentPages.map((page) => page.path);

const parentRedirects: Record<string, string> = {
  '/gioi-thieu': '/gioi-thieu/lich-su-hinh-thanh',
  '/hoat-dong': '/hoat-dong/ma-so-ma-vach',
};

const placeholderPaths = flattenNavItems(mainNav)
  .filter(
    (item) =>
      item.path !== '/' &&
      item.path !== '/tin-tuc' &&
      !newsCategorySlugs.includes(item.path.replace('/tin-tuc/', '')) &&
      item.path !== '/hoat-dong-msmv-dia-phuong' &&
      !contentPagePaths.includes(item.path) &&
      !(item.path in parentRedirects),
  )
  .map((item) => item.path);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/tin-tuc" element={<NewsListPage title="Tin tức" />} />
          {newsCategories.map((cat) => (
            <Route
              key={cat.slug}
              path={`/tin-tuc/${cat.slug}`}
              element={<NewsListPage title={cat.label} fixedCategory={cat.slug} />}
            />
          ))}
          <Route path="/hoat-dong-msmv-dia-phuong" element={<NewsListPage title="Hoạt động MSMV địa phương" fixedCategory="hoat-dong-msmv-dia-phuong" />} />
          <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />

          {Object.entries(parentRedirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}

          {contentPages.map((page) => (
            <Route key={page.path} path={page.path} element={<ContentPage page={page} />} />
          ))}

          <Route path="/lien-he" element={<ContactPage />} />

          {placeholderPaths.map((path) => {
            const item = flattenNavItems(mainNav).find((nav) => nav.path === path);
            return (
              <Route key={path} path={path} element={<PlaceholderPage title={item?.label ?? ''} />} />
            );
          })}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
