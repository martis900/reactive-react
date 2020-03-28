
import withSynapse from './withSynapse'
import Subs from './Subscriptions'
let components: any = []

class Dep {
    constructor(Synapse: any) { }

    notify() {
        Object.keys(globalThis.Synapse.subs.componentStore).forEach((key: any) => { /// @ts-ignore
            globalThis.Synapse.subs.componentStore[key].instance.forceUpdate() /// @ts-ignore
        })
    }
}

export default class Synapse {
    withSynapse: any;
    config: any;
    data: any;
    framework: any
    subs: any
    constructor(root: any) {
        this.config = root.framework
        Object.assign(this, root.data)
        console.log(this)
        this.withSynapse = withSynapse
        this.subs = new Subs(Synapse)
        this.initData(root);
        globalThis.framework = root.framework
        globalThis.Synapse = this
    }

    initData(root: any) {
        Object.keys(root.data).forEach((collection: any) => {
            Object.keys(root.data[collection]).forEach((key: any) => {
                let internalValue = root.data[collection][key]
                const dep = new Dep(this)
                Object.defineProperty(root.data[collection], key, {
                    get() {
                        return internalValue
                    },
                    set(newVal) {
                        internalValue = newVal
                        dep.notify()
                    }
                })
            })
        })
    }
}