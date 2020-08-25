import axios from "axios";

import {
  Attachment,
  ErrorData,
  SubmissionResult,
  Submitter,
  SubmitType,
} from "@/types";

export class InQuest implements Submitter {
  public favicon: string;
  public name: string;
  public type: SubmitType;

  public constructor() {
    this.favicon = "https://www.google.com/s2/favicons?domain=inquest.net";
    this.name = "InQuest";
    this.type = "sha256";
  }

  public async submit(attachment: Attachment): Promise<SubmissionResult> {
    try {
      const response = await axios.post<SubmissionResult>(
        "/api/submit/inquest",
        attachment
      );
      return response.data;
    } catch (error) {
      const data = error.response.data as ErrorData;
      throw data;
    }
  }
}
