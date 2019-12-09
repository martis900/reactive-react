import { watchComponent } from './'

export default function withSynapse(ReactComponent: any) {
    const React = window.framework // @ts-ignore
    return class extends React.Component {
        constructor(props: any) {
            super(props)
            watchComponent(this)
        }
        
        render() {
            return React.createElement(
                ReactComponent
            )
        }
    }
}