import { useState } from "react";


export const useList = (arr: number[]) => { 
    const [list, setList] = useState(arr);

    const push = (param: number) => {
        setList([...list, param]);
    }

    const pop = () => {
        list.pop();
        setList([...list]);
    }

    const clear = (param: number) => {
        setList([]);
    }
    const reset = (param: number) => {
        setList(arr)
    }
    const map = () => {
        setList(
            list.map((el: number) => {
                return el * 2;
            })
        )
    }

    return [list, { push, pop, clear, reset, map }];
};
