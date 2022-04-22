export { ItemId, IConcreteRegistry, IConcreteItem, ConcreteRegistryFilter } from './types/registry';
export { K8sConfig, K8sApiInfo, K8sApiResourceInfo } from './types/k8s';

export { extractK8sConfigId } from './utils/registry';
export { parseConfigApiVersion, parseApiVersion } from './utils/k8s';