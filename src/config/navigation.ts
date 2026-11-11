export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'TRANG CHỦ', path: '/' },
  {
    label: 'GIỚI THIỆU',
    path: '/gioi-thieu',
    children: [
      { label: 'Giới thiệu chung', path: '/gioi-thieu/gioi-thieu-chung' },
      { label: 'Sơ đồ tổ chức', path: '/gioi-thieu/so-do-to-chuc' },
    ],
  },
  {
    label: 'TIN TỨC',
    path: '/tin-tuc',
    children: [
      { label: 'Tin tức/Sự kiện', path: '/tin-tuc/tin-tuc-su-kien' },
      { label: 'Hoạt động MSMV tại địa phương', path: '/tin-tuc/hoat-dong-msmv-dia-phuong' },
    ],
  },
  {
    label: 'HOẠT ĐỘNG',
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
    label: 'HỎI ĐÁP',
    path: '/hoi-dap',
    children: [
      { label: 'Câu hỏi thường gặp', path: '/hoi-dap/cau-hoi-thuong-gap' },
      { label: 'Danh sách câu hỏi', path: '/hoi-dap/danh-sach-cau-hoi' },
      { label: 'Tạo câu hỏi', path: '/hoi-dap/tao-cau-hoi' },
    ],
  },
  { label: 'LIÊN HỆ', path: '/lien-he' },
];

export const flattenNavItems = (items: NavItem[]): NavItem[] =>
  items.flatMap((item) => [item, ...flattenNavItems(item.children ?? [])]);
