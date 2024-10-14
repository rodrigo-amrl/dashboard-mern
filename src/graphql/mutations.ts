import gql from "graphql-tag";



export const UPDATE_USER_MUTATION = gql`
#the ! after the type means that it is required
mutation UpdateUser($input:UpdateOneUserInput!){
    #call the updateOneUser mutation with the input and pass the $input argument
    # $variableName is a convention for GraphQl variable
    updateOneUser(input:$input){
        id
        name
        avatarUrl
        email
        phone
        jobTitle
    }
}`
export const CREATE_COMPANY_MUTATION = gql`
mutation CreateCompany($input:CreateOneCompanyInput!){
    createOneCompany(input:$input){
        id
        salesOwner{
            id
        }
    }
}
`
export const UPDATE_COMPANY_MUTATION = gql`
mutation UpdateCompany($input:UpdateOneCompanyInput!){
    updateOneCompany(input:$input){
        id
        name
        totalRevenue
    }
}
`
export const UPDATE_TASK_MUTATION = gql`
mutation UpdateTask($input:UpdateOneTaskInput!){
    updateOneTask(input:$input){
        id
        title
        completed
        dueDate
        stage{
            id
            title
        }
        users{
            id
            name
            avatarUrl
        }
        checklist{
            title
            checked
        }
    }
}
`