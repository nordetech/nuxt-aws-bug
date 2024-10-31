export interface TableColumn<K extends string | number | symbol> {
  key: K
  label: string
  class?: string
}
