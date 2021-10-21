import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { initialState } from "../../reducer/initialState";
import { Context } from "../../Context";
import ProjectsListItem from ".";

interface IContextProps {
    state: typeof initialState;
    dispatch: any;
    service: any;
}

describe("some text", () => {
    const state = {

      };

    beforeEach(() => {
        render(
            <Context.Provider value={state}>
                <ProjectsListItem />
            </Context.Provider>
        );
    });
});