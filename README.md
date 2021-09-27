# handson-kube


# My Operator commands

### Make sure dependencies are installed:
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