export interface FolderItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SubItem[];
}
export interface SubItem {
  id: string;
  name: string;
  children?: SubItem[];
}
