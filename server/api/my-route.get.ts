import { CloudWatchLogsClient } from '@aws-sdk/client-cloudwatch-logs'
import { S3Client } from '@aws-sdk/client-s3'

new CloudWatchLogsClient()
new S3Client()

export default defineEventHandler(async () => {
  return {}
})