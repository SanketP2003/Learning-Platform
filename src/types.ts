export type Course = {
  id: string;
  title: string;
  progress: number;
  estimatedCompletion: string;
  nextLesson: string;
  category: string;
  iconName: string;
};

export type ActivityEntry = {
  date: string;
  count: number;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  iconName: string;
  progress: number;
};

export type UserMetrics = {
  streak: number;
  xp: number;
  level: string;
  weeklyStudyHours: Array<{ day: string; hours: number }>;
  productivity: number;
};

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: Course;
      };
      
    };
  };
}
