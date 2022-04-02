export interface BudgetEntry {
    name: string;
    amount: number;
}

export interface BudgetData {
    balance: number;

    emergencyBuffer: number;

    income: Array<BudgetEntry>;
    expenses: Array<BudgetEntry>;
}

export function sum(budgetEntryList: Array<BudgetEntry>): number {
    return budgetEntryList.reduce<number>((current, entry) => current + entry.amount, 0);
}
