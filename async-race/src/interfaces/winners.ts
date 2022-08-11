export interface IWinners {
    id: number,
    car: {
        name: string,
        color: string
    },
    wins: number,
    time: number,
}

export interface IGetWinners {
    page: number,
    limit?: number,
    sort?: string | undefined,
    order?: string | undefined
}

