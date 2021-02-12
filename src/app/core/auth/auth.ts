export const ADMIN = 'admin';
export const MODERATOR = 'moderator';
export type UserRoles = typeof ADMIN | typeof MODERATOR;

export interface Auth {
  token: string;
  displayName: string;
  role: UserRoles;
}

