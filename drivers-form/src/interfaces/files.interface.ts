export interface File {
  name: string;
  type: string; // Tipo MIME (por ejemplo, 'image/jpeg')
  size: number; // Tamaño en bytes
  lastModified: number; // Fecha de última modificación (timestamp)
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  slice(start?: number, end?: number, contentType?: string): Blob;
}
