import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'

const dontentGetter = state => state.content.entities
const idGetter = (state, props) => props.id

export const contentSelector = createSelector(contentGetter, (content) => {
    return mapToArr(content).filter(contentItem => {
        return (!selected.length || selected.includes(contentItem.name)) &&
            (!from || !to || (published > from && published < to))
    })
})