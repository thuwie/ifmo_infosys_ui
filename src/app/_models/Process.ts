export interface Process {
  taskId: number;
  processStateDefinition: string;
  ownerId: number;
  requestedDays: number;
  employeeId: number;
  vacationId: number;
  requestStatus: string ;
  processInstanceId: number;
  assignedManagerId: number;
  assignedManagerName: string;
  lastStateManagerId: number;
  lastStateManagerName: string;
  vacationStartDate: number;
}
