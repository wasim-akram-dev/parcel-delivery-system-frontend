/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import ParcelDetails from "./ParcelDetails";

function TrackParcelForm() {
  const [trackingId, setTrackingId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [parcel, setParcel] = useState<any>(null);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setIsLoading(true);
    setError("");
    setParcel(null);

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/parcels/track/${trackingId}`
      );
      const data = await res.json();

      if (!data.success) throw new Error(data.message || "Parcel not found");

      setParcel(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearTrackingId = () => {
    setTrackingId("");
    setParcel(null);
    setError("");
  };

  return (
    <Card className="max-w-2xl mx-auto p-8 shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
      <CardContent className="space-y-6">
        <form onSubmit={handleTrack} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Enter tracking number (e.g., TRK1762624529292)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="h-12 text-lg pr-10"
                autoFocus
              />
              {trackingId && (
                <button
                  type="button"
                  onClick={handleClearTrackingId}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <Button type="submit" disabled={isLoading} className="h-12 px-8">
              {isLoading ? (
                <div className="animate-spin h-5 w-5 border-2 border-t-transparent rounded-full" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
          </div>
        </form>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {parcel && <ParcelDetails parcel={parcel} />}
      </CardContent>
    </Card>
  );
}

export default TrackParcelForm;
