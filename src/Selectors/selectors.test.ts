import {selectCart, selectItems, selectStatus} from './selectors'
import {ProductItemsDomainType} from "../Features/MainPage/productItems-reducer";
import {RequestStatusType} from "../App/app-reducer";



describe('select items', () => {
    test ('should select items from state object', () => {
        const items: ProductItemsDomainType[]  = [{id: '123', name: 'Nokia', cost: 50, description: 'This is very good phone', image: 'image', status: false, count: 1}]
        const  endState  = selectItems({
            items,
            app: {
                status: 'idle',
                error: null
            },
            cart: []
        })
        expect(endState).toEqual(items)
    })
    test ('work with empty state', () => {
        const endState = selectItems({items: [], app: {
                status: 'idle',
                error: null
            },
            cart: []})
        expect(endState).toEqual([])
    })
})

describe('select cart', () => {
    test ('should select cart from state object', () => {
        const cart: ProductItemsDomainType[]  = [{id: '123', name: 'Nokia', cost: 50, description: 'This is very good phone', image: 'image', status: false, count: 1}]
        const  endState  = selectCart({
            items: [],
            app: {
                status: 'idle',
                error: null
            },
            cart
        })
        expect(endState).toEqual(cart)
    })
    test ('work with empty state', () => {
        const endState = selectCart({items: [], app: {
                status: 'idle',
                error: null
            },
            cart: []})
        expect(endState).toEqual([])
    })
})

describe('select status', () => {
    test ('should select status from state object', () => {
        const status: RequestStatusType  = 'succeeded'
        const  endState  = selectStatus({
            items: [],
            app: {
                status: 'succeeded',
                error: null
            },
            cart: []
        })
        expect(endState).toBe(status)
    })
    test ('work with empty state', () => {
        const endState = selectStatus({items: [], app: {
                status: 'idle',
                error: null
            },
            cart: []})
        expect(endState).toBe('idle')
    })
})