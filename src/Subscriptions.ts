function genId(): string {
    return (
        Math.random()
            .toString()
            .split('.')[1] + Date.now()
    );
}

export class ComponentContainer {
    public uuid: string = genId()
    public ready: boolean = true;
    public deps: any = new Set();
    constructor(
        public instance: any,
    ) {
        instance.__uniqueIdentifier = this.uuid;
    }
}

export default class SubController {
    public componentStore: any = {}

    constructor(public synapse: any) { }

    public registerComponent(instance: any) {
        let componentContainer = new ComponentContainer(instance)

        this.componentStore[componentContainer.uuid] = componentContainer;

        return componentContainer.uuid;
    }

    public get(id: string): any | boolean {
        return this.componentStore[id] || false;
    }

    public untrack(instance: any) {
        const uuid = instance.__uniqueIdentifier;
        if (!uuid) return;

        let component: ComponentContainer = this.componentStore[
            instance.__uniqueIdentifier
        ];

        // clean up deps to avoid memory leaks
        component.deps.forEach((dep: any) => dep.subscribers.delete(component));
        // delete reference to this component instance from store
        delete this.componentStore[instance.__uniqueIdentifier];
    }

    public mount(instance: any) {
        console.log(instance.__uniqueIdentifier);
        let component: any = this.componentStore[
            instance.__uniqueIdentifier
        ];
        if (component) {
            component.instance = instance;
            component.ready = true;
        } else {
            console.error('you did something wrong');
        }
    }
}