const JsonResponse ={
  responseSuccess:(status, message, data)=>{
        return {
            status: status,
            message: message,
            data: data
        }
    },

    responseError:(status, message)=>{
        return {
            status: status,
            message:message,
        }
    }
}

module.exports = JsonResponse;