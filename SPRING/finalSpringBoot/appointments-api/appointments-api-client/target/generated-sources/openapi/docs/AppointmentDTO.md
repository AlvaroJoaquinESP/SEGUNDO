

# AppointmentDTO


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **Long** |  |  [optional] |
|**patient** | [**Patient**](Patient.md) |  |  [optional] |
|**doctor** | [**Doctor**](Doctor.md) |  |  [optional] |
|**appointmentDate** | **OffsetDateTime** |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**notes** | **String** |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SCHEDULED | &quot;SCHEDULED&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| CANCELLED | &quot;CANCELLED&quot; |


## Implemented Interfaces

* Serializable


