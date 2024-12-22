const TASK_STATUSES = [
  'TODO',
  'ON_PROGRESS',
  'DONE',
  'ARCHIVED',
  'INVALID',
] as const;
export type TaskStatus = (typeof TASK_STATUSES)[number];
export class Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  ownerId: number;
  createdAt: number;
  updatedAt: number;
  isDeleted?: boolean;

  constructor(id: number, title: string, description: string) {
    const timestamp = Date.now();
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = 'TODO';
    this.ownerId = -1;
    this.isDeleted = false;
    this.createdAt = timestamp;
    this.updatedAt = timestamp;
  }
}
