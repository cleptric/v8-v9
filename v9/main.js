import * as Sentry from '@sentry/browser'

(async () => {
    Sentry.init({
        dsn: "",
        tracesSampleRate: 1.0,
        profilesSampleRate: 1.0,
        replaysSessionSampleRate: 1.0,
        replaysOnErrorSampleRate: 1.0,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.browserProfilingIntegration(),
            Sentry.replayIntegration(),
            Sentry.feedbackIntegration(),
        ],
    })
})()
