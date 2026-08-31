/**
 * Organizational department definitions.
 */
export const DEPARTMENTS = [
  { id: "dept-1", name: "Engineering", code: "ENG", budgetCode: "BUD-1001" },
  { id: "dept-2", name: "Product", code: "PRO", budgetCode: "BUD-1002" },
  { id: "dept-3", name: "Design", code: "DES", budgetCode: "BUD-1003" },
  { id: "dept-4", name: "Sales", code: "SAL", budgetCode: "BUD-1004" },
  { id: "dept-5", name: "Marketing", code: "MAR", budgetCode: "BUD-1005" },
  { id: "dept-6", name: "HR", code: "HR", budgetCode: "BUD-1006" },
  { id: "dept-7", name: "Finance", code: "FIN", budgetCode: "BUD-1007" },
  { id: "dept-8", name: "Customer Success", code: "CUS", budgetCode: "BUD-1008" },
  { id: "dept-9", name: "Legal", code: "LEG", budgetCode: "BUD-1009" },
  { id: "dept-10", name: "Operations", code: "OPE", budgetCode: "BUD-1010" },
  { id: "dept-11", name: "IT", code: "IT", budgetCode: "BUD-1011" },
  { id: "dept-12", name: "Security", code: "SEC", budgetCode: "BUD-1012" },
  { id: "dept-13", name: "Data Science", code: "DAT", budgetCode: "BUD-1013" },
  { id: "dept-14", name: "Support", code: "SUP", budgetCode: "BUD-1014" },
  { id: "dept-15", name: "Business Development", code: "BUS", budgetCode: "BUD-1015" }
];

export const DEPARTMENT_NAMES = DEPARTMENTS.map((d) => d.name);

export function getDepartmentById(id) {
  return DEPARTMENTS.find((d) => d.id === id) || null;
}

export function getDepartmentByName(name) {
  return DEPARTMENTS.find((d) => d.name === name) || null;
}
