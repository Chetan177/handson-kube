# handson-kube


# My Operator commands

### Make sure dependencies are installed:

Main Repo: [Link(https://github.com/embano1/codeconnect-vm-operator)
Video: [Link](https://www.youtube.com/watch?v=8Ex7ybi273g&t=1492s)
- GCC
- GoLang
- Kubebuilder
- BuildEssentials

### Commands

```shell
go mod init myoperator

kubebuilder init --domain codeconnect.vmworld.com --skip-go-version-check flag

kubebuilder create api --group vm --version v1alpha1 --kind VmGroup --force
```


# My Controller

https://kubernetes.io/blog/2021/06/21/writing-a-controller-for-pod-labels/

```
kubebuilder init --domain mycontroller.com --skip-go-version-check --repo=github.com/chetan177/handson-kube/controller
kubebuilder create api --group core --version v1 --kind Pod --controller true --resource false


# Run

make
make run

kubectl run --image=nginx my-nginx
kubectl annotate pod my-nginx add-pod-name-label=true

```