import React from 'react';
import { Error } from '../Error';

type Props = {
    children: JSX.Element
}

export class ErrorBoundary extends React.Component<Props> {
    state = {
        error: false
    };

    componentDidCatch() : void {
        this.setState({
            error: true
        });
    }
    
    render(): JSX.Element {

        if (this.state.error) {
            return <Error />
        } else {
            return this.props.children
        }
    }
  }