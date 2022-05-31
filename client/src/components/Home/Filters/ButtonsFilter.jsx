import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, filterType } from "../../../redux/actions";

export default function ButtonsFilter() {

    const dispatch = useDispatch();
    const stateRedux = useSelector(state => state);

    return (
        <div className="flex justify-around w-full my-8">
            <div className="mx-1">
                <label htmlFor="type" className="text-white">Type</label>
                <select
                    name="type"
                    id="type"
                    autoComplete="feature"
                    onChange={(e) => dispatch(filterType(stateRedux.user.id, e.target.value))}
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                >
                    <option>~</option>
                    <option value="ENTRY">ENTRY</option>
                    <option value="EXIT">EXIT</option>
                </select>
            </div>
            <div className="mx-1">
                <label htmlFor="category" className="text-white">Category</label>
                <select
                    name="category"
                    id="category"
                    autoComplete="feature"
                    onChange={(e) => dispatch(filterCategory(stateRedux.user.id, e.target.value))}
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                >
                    <option>~</option>
                    {
                        stateRedux.categories.length > 0 && stateRedux.categories.map(category => <option value={category.name} key={category.id}>{category.name}</option>)
                    }
                </select>
            </div>
        </div>
    )
}