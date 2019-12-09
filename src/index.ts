
import withSynapse from './withSynapse'

let components: any = []

class Dep {
    notify() {
        // this.subscribers.forEach((sub: Function) => sub())
        components.forEach((component: any) => {
            component.forceUpdate();
        })
    }
}

export function watchComponent(comp: any) {
    if (!components.includes(comp)) {
        components.push(comp)
    }
}



export default class Synapse {
    withSynapse: any;
    config: any;
    data: any;
    framework: any

    constructor(root: any) {
        this.config = root.framework
        Object.assign(this, root.data)
        console.log(this)
        this.withSynapse = withSynapse

        this.initData(root);

        window.framework = root.framework
        window.synapse = this
    }


    initData(root: any) {
        Object.keys(root.data).forEach((collection: any) => {
            Object.keys(root.data[collection]).forEach((key: any) => {
                let internalValue = root.data[collection][key]
                const dep = new Dep()
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