export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Trang chủ', path: '/' },
  {
    label: 'Giới thiệu',
    path: '/gioi-thieu',
    children: [
      { label: 'Lịch sử hình thành', path: '/gioi-thieu/lich-su-hinh-thanh' },
      { label: 'Chức năng nhiệm vụ', path: '/gioi-thieu/chuc-nang-nhiem-vu' },
      { label: 'Cơ cấu tổ chức', path: '/gioi-thieu/co-cau-to-chuc' },
      { label: 'Đối tác quốc tế', path: '/gioi-thieu/doi-tac-quoc-te' },
    ],
  },
  {
    label: 'Hoạt động',
    path: '/hoat-dong',
    children: [
      { label: 'Mã số mã vạch', path: '/hoat-dong/ma-so-ma-vach' },
      { label: 'Truy xuất nguồn gốc', path: '/hoat-dong/truy-xuat-nguon-goc' },
      { label: 'Mã LEI', path: '/hoat-dong/ma-lei' },
      { label: 'Mã UDI', path: '/hoat-dong/ma-udi' },
      { label: 'Đào tạo', path: '/hoat-dong/dao-tao' },
    ],
  },
  {
    label: 'Tin tức',
    path: '/tin-tuc',
    children: [
      { label: 'Tin tức sự kiện', path: '/tin-tuc/tin-tuc-su-kien' },
      { label: 'Hoạt động MSMV địa phương', path: '/hoat-dong-msmv-dia-phuong' },
      { label: 'Thông báo', path: '/tin-tuc/thong-bao' },
      { label: 'Tin hoạt động', path: '/tin-tuc/tin-hoat-dong' },
    ],
  },
  {
    label: 'Truy xuất nguồn gốc',
    path: '/truy-xuat-nguon-goc',
    children: [
      { label: 'Tra cứu sản phẩm', path: '/truy-xuat-nguon-goc/tra-cuu-san-pham' },
      { label: 'Đăng ký chuỗi', path: '/truy-xuat-nguon-goc/dang-ky-chuoi' },
    ],
  },
  {
    label: 'Hỏi đáp',
    path: '/hoi-dap',
    children: [
      { label: 'Danh sách câu hỏi', path: '/hoi-dap/danh-sach-cau-hoi' },
      { label: 'Tạo câu hỏi', path: '/hoi-dap/tao-cau-hoi' },
    ],
  },
  { label: 'Tra cứu', path: '/tra-cuu' },
];

export function flattenNavItems(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => [item, ...(item.children ?? [])]);
}

export const newsCategories: { slug: string; label: string }[] = [
  { slug: 'tin-tuc-su-kien', label: 'Tin tức sự kiện' },
  { slug: 'hoat-dong-msmv-dia-phuong', label: 'Hoạt động MSMV địa phương' },
  { slug: 'thong-bao', label: 'Thông báo' },
  { slug: 'tin-hoat-dong', label: 'Tin hoạt động' },
];

export function getCategoryLabel(slug: string): string {
  return newsCategories.find((cat) => cat.slug === slug)?.label ?? slug;
}
