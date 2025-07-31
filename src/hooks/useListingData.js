import { useMemo } from "react";
import abbreviate from "number-abbreviate";
import { Symbols } from "../assets/symbols";

export const useListingData = (items, type) => {
    const processedItems = useMemo(() => {
        if(type === "developer") {
            const filteredDevelopers = items.filter((item) => item.__typename !== "Organization");
            const firstFive = filteredDevelopers.slice(0, 5);
            return firstFive;
        }

        return items;
    }, [items, type]);

    const getDisplayValue = (item) => {
        if(type === "repository") {
            return abbreviate(item.stargazerCount, 0).toUpperCase();
        }
        if(type === "developer") {
            return abbreviate(item.followers.totalCount, 0).toUpperCase();
        }
    }

    const config = {
        repository: {
            title: "Popular Repos",
            symbol: Symbols.fire,
            spanSymbol: Symbols.star
        },

        developer: {
            title: "Top followed Devs",
            symbol: Symbols.crown,
            spanSymbol: Symbols.follower
        }
    }[type]

    return {config, getDisplayValue, processedItems};
}