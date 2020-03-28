// @ts-nocheck

export default function withSynapse(ReactComponent: any) {
    const React = globalThis.framework // @ts-ignore
    const Synapse = globalThis.Synapse // @ts-ignore
    return class extends React.Component {
        constructor(props: any) {
            super(props)
            Synapse.subs.registerComponent(this)
        }

        componentDidMount() {
            Synapse.subs.mount(this)
        }

        render() {
            return React.createElement(
                ReactComponent
            )
        }
    }
}