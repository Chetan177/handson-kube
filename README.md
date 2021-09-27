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