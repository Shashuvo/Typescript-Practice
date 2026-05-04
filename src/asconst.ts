// as const assertion


const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
    else return false;
}

const isPermissible = canEdit(UserRoles.Admin);

console.log(isPermissible);
