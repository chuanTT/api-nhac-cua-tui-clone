export {}
declare global {
    // function upload file
    interface uploadFileType {
        name: string
        isMutile?: boolean
        pathRoot?: string
        countFile?: number
        validateFilterFile?: any
      }



    // middleware request
    type configValidateValueType = {
        rules: any[]
        dependent?: string
        isDisableKey?: boolean
        msg: {
          [key: string]: string
        }
      }
    
      type configValidateType = {
        [key: string]: configValidateValueType
      }
}