import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { slugify } from "@/lib/utils";
import { Calendar, Clock, DollarSign, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  getAnnouncements,
  getEvents,
  getPrograms,
  getProgramSeries,
} from "../airtable";

export default async function ProgramsPage() {
  // Fetch all programs, events, and announcements
  const [allPrograms, allEvents, allAnnouncements, programSeries] =
    await Promise.all([
      getPrograms(),
      getEvents(),
      getAnnouncements(),
      getProgramSeries(),
    ]);

  // Combine all items and group by type
  const allItems = [
    ...allPrograms.map((p) => ({ ...p, itemType: "program" as const })),
    ...allEvents.map((e) => ({ ...e, itemType: "event" as const })),
    ...allAnnouncements.map((a) => ({
      ...a,
      itemType: "announcement" as const,
    })),
  ];

  // Group program series by program ID
  const seriesMap = new Map<string, typeof programSeries>();
  programSeries.forEach((series) => {
    const programId = series.Program?.[0];
    if (programId) {
      const existing = seriesMap.get(programId) || [];
      existing.push(series);
      seriesMap.set(programId, existing);
    }
  });

  return (
    <div className="bg-brand-secondary">
      {/* Hero Section */}
      <PageHero
        title="Programs & Events"
        subtitle="Discover our dynamic programs and upcoming events that enrich our students' educational journey"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg p-8 shadow-md mb-12">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">
              Enriching Educational Experiences
            </h2>
            <p className="text-brand-text-muted mb-4">
              At Cordoba Academy, we believe learning extends beyond the
              classroom. Our diverse programs and events create opportunities
              for students to explore their interests, develop new skills, and
              strengthen their connection to their Islamic identity and
              community.
            </p>
            <p className="text-brand-text-muted">
              Browse through our offerings below to find the perfect fit for
              your child's educational journey.
            </p>
          </div>

          {/* Programs List */}
          {allItems.length > 0 ? (
            <div className="space-y-8">
              {allItems.map((item, index) => {
                const heroImage = item["Hero image"]?.[0];
                const slug = slugify(item.Name);
                const itemSeries =
                  item.itemType === "program"
                    ? seriesMap.get(item.id) || []
                    : [];

                // Format schedule information
                let scheduleInfo: string[] = [];
                if (item.itemType === "event" && item.Start && item.End) {
                  const startDate = new Date(item.Start);
                  const endDate = new Date(item.End);
                  scheduleInfo.push(
                    `${startDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}`
                  );
                  scheduleInfo.push(
                    `${startDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })} - ${endDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}`
                  );
                } else if (
                  item.itemType === "program" &&
                  itemSeries.length > 0
                ) {
                  // Group by weekday and time
                  const scheduleGroups = new Map<string, string[]>();
                  itemSeries.forEach((series) => {
                    const timeRange = series.Name.split(" | ").pop() || "";
                    if (!scheduleGroups.has(timeRange)) {
                      scheduleGroups.set(timeRange, []);
                    }
                    scheduleGroups.get(timeRange)?.push(series.Weekday);
                  });

                  scheduleGroups.forEach((weekdays, timeRange) => {
                    const uniqueWeekdays = Array.from(new Set(weekdays));
                    scheduleInfo.push(
                      `${uniqueWeekdays.join(", ")}: ${timeRange}`
                    );
                  });
                }

                return (
                  <div
                    key={`${item.Name}-${index}`}
                    id={slug}
                    className="scroll-mt-24"
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col lg:flex-row">
                        {/* Image Section */}
                        {heroImage && (
                          <div className="relative w-full lg:w-2/5 h-64 lg:h-auto min-h-[300px]">
                            <Image
                              src={heroImage.url}
                              alt={item.Name}
                              fill
                              className="object-cover"
                            />
                            {/* Type Badge */}
                            <div className="absolute top-4 right-4">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                                  item.itemType === "program"
                                    ? "bg-brand-primary"
                                    : item.itemType === "event"
                                    ? "bg-brand-accent-orange"
                                    : "bg-blue-600"
                                }`}
                              >
                                {item.itemType === "program"
                                  ? "Ongoing Program"
                                  : item.itemType === "event"
                                  ? "Upcoming Event"
                                  : "Announcement"}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Content Section */}
                        <CardContent className="flex-1 p-8">
                          <div className="space-y-6">
                            {/* Header */}
                            <div>
                              <h3 className="text-3xl font-bold text-brand-primary mb-3">
                                {item.Name}
                              </h3>
                              <p className="text-lg text-brand-text-muted">
                                {
                                  item[
                                    "Short description (appears on Carousel)"
                                  ]
                                }
                              </p>
                            </div>

                            {/* Key Information Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Schedule */}
                              {scheduleInfo.length > 0 && (
                                <div className="flex items-start gap-3 p-4 bg-brand-accent rounded-lg">
                                  <Calendar className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-semibold text-brand-primary text-sm mb-1">
                                      Schedule
                                    </p>
                                    {scheduleInfo.map((info, idx) => (
                                      <p
                                        key={idx}
                                        className="text-brand-text-muted text-sm"
                                      >
                                        {info}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Duration for Programs */}
                              {item.itemType === "program" &&
                                itemSeries.length > 0 && (
                                  <div className="flex items-start gap-3 p-4 bg-brand-accent rounded-lg">
                                    <Clock className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                      <p className="font-semibold text-brand-primary text-sm mb-1">
                                        Duration
                                      </p>
                                      <p className="text-brand-text-muted text-sm">
                                        {new Date(
                                          itemSeries[0]["Start date"]
                                        ).toLocaleDateString("en-US", {
                                          month: "long",
                                          day: "numeric",
                                        })}{" "}
                                        -{" "}
                                        {new Date(
                                          itemSeries[0]["End date"]
                                        ).toLocaleDateString("en-US", {
                                          month: "long",
                                          day: "numeric",
                                          year: "numeric",
                                        })}
                                      </p>
                                    </div>
                                  </div>
                                )}

                              {/* Cost */}
                              {(item.itemType === "program" ||
                                item.itemType === "announcement") &&
                                item.Cost && (
                                  <div className="flex items-start gap-3 p-4 bg-brand-accent rounded-lg">
                                    <DollarSign className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                      <p className="font-semibold text-brand-primary text-sm mb-1">
                                        Cost
                                      </p>
                                      <p className="text-brand-text-muted text-sm">
                                        ${item.Cost}
                                        {item["Cost per"] &&
                                          ` per ${item["Cost per"]}`}
                                      </p>
                                    </div>
                                  </div>
                                )}
                            </div>

                            {/* Long Description */}
                            {item["Long description"] && (
                              <div className="border-t pt-6">
                                <div className="flex items-start gap-2 mb-3">
                                  <Info className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                  <h4 className="font-semibold text-brand-primary text-lg">
                                    About This{" "}
                                    {item.itemType === "program"
                                      ? "Program"
                                      : item.itemType === "event"
                                      ? "Event"
                                      : "Announcement"}
                                  </h4>
                                </div>
                                <p className="text-brand-text-muted whitespace-pre-line leading-relaxed">
                                  {item["Long description"]}
                                </p>
                              </div>
                            )}

                            {/* Action Button */}
                            {item["Registration link"] && (
                              <div className="pt-4">
                                <Link
                                  href={item["Registration link"]}
                                  target="_blank"
                                >
                                  <Button className="bg-brand-accent-orange hover:bg-brand-primary text-white px-8 py-6 text-lg">
                                    Register Now
                                  </Button>
                                </Link>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-12 text-center shadow-md">
              <Calendar className="h-16 w-16 text-brand-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                No Programs or Events Available
              </h3>
              <p className="text-brand-text-muted">
                Check back soon for exciting new programs and events!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-primary py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-6">
              Don't miss out on our exciting programs and events. Subscribe to
              our newsletter or follow us to stay updated on upcoming
              opportunities for your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-brand-primary hover:bg-brand-accent">
                  Contact Us
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                >
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
