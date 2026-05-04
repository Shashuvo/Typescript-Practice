// enum : a special data type that allow to define a set of named constants

enum canEdit {
    Admin = "Admin",
    Editor = " Editor",
    Viewer = "Viewer"
}

const isPermissible = (role: canEdit) => {
    if (role === canEdit.Admin || role === canEdit.Editor) return true;
    else return false;
}

const result = isPermissible(canEdit.Admin);
