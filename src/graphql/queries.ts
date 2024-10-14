import gql from "graphql-tag";

export const USERS_SELECT_QUERY = gql`
  query UsersSelect(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
      }
    }
  }
`;

export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;

//query to get total company, contact an deals counts
export const DASHBOARD_TOTAL_COUNTS_QUERY = gql`
query DashboardTotalCounts{
  companies{totalCount}
  contacts{totalCount}
  deals{totalCount}
}`
// query to get latest activities deals
export const DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY = gql`
query DashboardLatestActivitiesDeals(
  $filter:DealFilter,
  $sorting:[DealSort!],
  $paging: OffsetPaging
){
  deals(filter:$filter,sorting:$sorting,paging:$paging){
    totalCount
    nodes{
      id
      title
      stage{
        id
        title
      }
      company{
        id
        name
        avatarUrl
      },
      createdAt
    }

  }
}`
//query to get latest activities audits
export const DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY = gql`
query DashboardLatestActivitiesAudits(
  $filter:AuditFilter!
  $sorting:[AuditSort!]
  $paging:OffsetPaging
){
  audits(filter:$filter,sorting:$sorting,paging:$paging){
    totalCount
    nodes{
      id
      action
      targetEntity
      targetId
      changes{
        field
        from
        to 
      }
      createdAt
      user{
        id
        name
        avatarUrl
      }
    }
  }
}`
export const COMPANIES_LIST_QUERY = gql`
query CompaniesList(
  $filter:CompanyFilter!
  $sorting:[CompanySort!]
  $paging:OffsetPaging!
){
  companies(filter:$filter,sorting:$sorting,paging:$paging){
    totalCount
    nodes{
      id
      name
      avatarUrl
      #get the sum of all deals in this company
      dealsAggregate{
        sum{
          value
        }
      }
    }
  }
}`
export const DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY = gql`
query DashboardCalendarUpcommingEvents(
  $filter:EventFilter!
  $sorting:[EventSort!]
  $paging:OffsetPaging!
){
  events(filter:$filter,sorting:$sorting,paging:$paging){
    totalCount
    nodes{
      id
      title
      color
      startDate
      endDate
    }
  }
}`
//query to get contacts associated with a company
export const COMPANY_CONTACTS_TABLE_QUERY = gql`
query CompanyContactsTable(
  $filter:ContactFilter!
  $sorting:[ContactSort!]
  $paging:OffsetPaging!
){
  contacts(filter:$filter,sorting:$sorting,paging:$paging){
    totalCount
    nodes{
      id
      name
      avatarUrl
      jobTitle
      email
      phone
      status
    }
  }
}`
export const DASHBOARD_DEALS_CHART_QUERY = gql`
query DashboardDealsChart(
  $filter:DealStageFilter!
  $sorting: [DealStageSort!]
  $paging:OffsetPaging
){
  dealStages(filter:$filter,sorting:$sorting,paging:$paging){
    #get all deal stages
    nodes{
      id
      title
      #get the sum of all deals in this stage an group by
      closeDateMonth and closeDateYear
      dealsAggregate{
        groupBy{
          closeDateMonth
          closeDateYear
        }
        sum{
          value
        }
      }
    }
    #get the total count of all deals in this stage
    totalCount
  }
}`

export const TASK_STAGES_QUERY = gql`
query TaskStages(
  $filter:TaskStageFilter!
  $sorting:[TaskStageSort!]
  $paging:OffsetPaging!
){
  taskStages(filter:$filter, sorting:$sorting,paging:$paging){
    totalCount #get the total count of task stages
    nodes{
      id
      title
    }
  }
}`
export const TASKS_QUERY = gql`
query Tasks(
  $filter:TaskFilter!
  $sorting:[TaskSort!]
  $paging: OffsetPaging!
){
  tasks(filter:$filter, sorting:$sorting, paging:$paging){
    totalCount #get the total count of tasks
    nodes{
      id
      title
      description,
      dueDate
      completed
      stageId
      users{
        id
        name
        avatarUrl
      }
      createdAt
      updatedAt
    }
  }
}`