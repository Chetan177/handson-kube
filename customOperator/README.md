## Commands


### Create scaffolding

```shell
export PATH=$PATH:/usr/local/go/bin

kubebuilder init --domain demo.operator.io --repo operator --skip-go-version-check

kubebuilder create api --group demo  --version v1 --kind DemoOperator


```

### Compile
```

make generate
make manifests


make install

```

### Create CRD on kubectl
```
kubectl get crd
kubectl create -f config/samples/demo_v1_demooperator.yaml
```


### Run the controller
```
make run

```


LINK : https://www.youtube.com/watch?v=LLVoyXjYlYM