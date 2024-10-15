import React from "react"

export interface TCGKeywordIndexData {
    [propName: string]: {
        name: string | React.ReactElement,
        image?: React.ReactElement,
        type?: string,
        cost?: string,
        description: string | React.ReactElement
    }
}