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

export function copyList(budgetEntryList: Array<BudgetEntry>) : Array<BudgetEntry> {
    let result: Array<BudgetEntry> = [];
    for (let entry of budgetEntryList) {
        result.push({
        name: entry.name,
        amount: entry.amount,
        });
    }
    return result;
}
