import { createSelector } from 'reselect';

export const getIsLoading = state => state.courseEnrollments.isLoading;
export const getCourseRuns = state => state.courseEnrollments.courseRuns;
export const getError = state => state.courseEnrollments.error;
export const getIsMarkCourseCompleteSuccess = state => state.courseEnrollments.isMarkCourseCompleteSuccess;

const transformCourseRun = (originalCourseRun) => {
  const courseRun = { ...originalCourseRun };

  // Return the fields expected by the component(s)
  courseRun.title = courseRun.displayName;
  courseRun.microMastersTitle = courseRun.micromastersTitle;
  // The link to course here gives precedence to the resume course link, which is
  // present if the learner has made progress. If the learner has not made progress,
  // we should link to the main course run URL. Similarly, if the resume course link
  // is not set in the API response, we should fallback on the normal course link.
  courseRun.linkToCourse = courseRun.resumeCourseRunUrl || courseRun.courseRunUrl;
  courseRun.linkToCertificate = courseRun.certificateDownloadUrl;
  courseRun.hasEmailsEnabled = courseRun.emailsEnabled;
  courseRun.notifications = courseRun.dueDates;

  // Delete renamed/unused fields
  delete courseRun.displayName;
  delete courseRun.micromastersTitle;
  delete courseRun.resumeCourseRunUrl;
  delete courseRun.courseRunUrl;
  delete courseRun.certificateDownloadUrl;
  delete courseRun.emailsEnabled;
  delete courseRun.dueDates;

  return courseRun;
};

export const getCourseRunsByStatus = createSelector(
  [getCourseRuns],
  (courseRuns) => {
    const courseRunsByStatus = {
      in_progress: [],
      upcoming: [],
      completed: [],
    };
    if (courseRuns && courseRuns.length > 0) {
      const transformedCourseRuns = courseRuns.map(transformCourseRun);
      Object.keys(courseRunsByStatus).forEach((status) => {
        courseRunsByStatus[status] = transformedCourseRuns.filter(courseRun => courseRun.courseRunStatus === status);
      });
    }
    return courseRunsByStatus;
  },
);
